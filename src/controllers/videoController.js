import Video from "../models/video.js";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ createdAt: "desc" });
    res.status(200).json({ videos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const watch = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) {
      res.status(404).json({ message: "비디오를 찾을 수 없습니다." });
      return;
    }
    res.status(200).json({ video });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  try {
    const video = await Video.findByIdAndUpdate(id, {
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    if (!video) {
      return res.status(404).json({ message: "비디오를 찾을 수 없습니다. " });
    }
    return res.redirect(`/video/${id}`);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect("/");
  } catch (error) {
    return res.status(400).render({ message: error.message });
  }
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  try {
    if (keyword) {
      videos = await Video.find({
        title: {
          $regex: new RegExp(keyword, "i"),
        },
      });
    }
    return res.render("search", { videos });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
