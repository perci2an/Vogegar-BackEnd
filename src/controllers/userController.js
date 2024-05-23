import User from "../models/User";
import bcrypt from "bcrypt";

export const postJoin = async (req, res) => {
  const { name, username, email, password, location } = req.body;

  const usernameExists = await User.exists({ username });
  if (usernameExists) {
    return res.status(400).json({ message: "이미 존재하는 닉네임입니다." });
  }
  const emailExists = await User.exists({ email });
  if (emailExists) {
    return res.status(400).json({ message: "이미 존재하는 이메일입니다." });
  }
  try {
    await User.create({
      email,
      username,
      password,
      name,
      location,
    });
    return res.status(201).json({ message: "성공적으로 가입되었습니다." });
  } catch (error) {
    return res.status(400).json({ message: error._message });
  }
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: "존재하지 않는 닉네임입니다." });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).json({ message: "잘못된 비밀번호입니다." });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.status(200).json({ message: "성공적으로 로그인되었습니다." });
};

export const startGithubLogin = (req, res) => {
  const baseUrl = "https://github.com/login/oauth/authorize";
  const config = {
    client_id: "Ov23liydkM6SkRRK4vL9",
    allow_signup: false,
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};

export const edit = (req, res) =>
  res.status(200).json({ message: "프로필 수정" });
export const remove = (req, res) =>
  res.status(200).json({ message: "프로필 삭제" });
export const logout = (req, res) =>
  res.status(200).json({ message: "로그아웃" });
export const see = (req, res) =>
  res.status(200).json({ message: "프로필 확인" });
