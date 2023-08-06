const express = require("express");
const router = express.Router();
const Category = require("../models/CategorySchema");

router.post("/categorize", async (req, res) => {
  const [desc, category, item] = req.body;
  console.log("req.body -> ", req.body);

  // const CategoryArr = req.body;

  // const isCategoryEmpty = false;
  // for (const el of category) {
  //   if (el.id === "" || el.val === "") {
  //     isCategoryEmpty = true;
  //     console.log("pls write some Category ");
  //     return res.json({ err: "pls write some Category " });
  //   }
  // }

  // const isItemEmpty = false;
  // for (const el of item) {
  //   if (el.id === 0 || el.val === "" || el.Category === "") {
  //     isItemEmpty = true;
  //     console.log("pls write some Item ");
  //     return res.json({ err: "pls write some Item " });
  //   }
  // }
  // if (!desc) {
  //   console.log("desc is empty");
  //   return res.json({ err: "pls write a description of the question" });
  // }

  try {
    const isCtgryQnExist = await Category.findOne({ desc: desc });
    console.log(isCtgryQnExist);
    if (isCtgryQnExist) {
      res
        .status(404)
        .json({ err: "pls write a different description of the question" });
    } else {
      const newCategory = new Category({
        desc,
        Categories: category,
        Items: item,
      });
      console.log("line 43 -> ", newCategory);
      newCategory.save();
    }
  } catch (error) {
    console.log(error);
  }

  return res.status(300).json({ msg: req.body });
});

router.get("/", async (req, res) => {
  const findCategoryQn = await Category.find();
  console.log("find category questions => ", findCategoryQn);
  return res.status(200).json(findCategoryQn);
});

module.exports = router;
