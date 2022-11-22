import Category from "../model/categoryModel.js";

async function getCategory(req, res) {
  try {
    let data = await Category.find();
    res.status(200).send({
      status: "success",
      message: "Successfull fetch data",
      data,
    });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
}

async function getCategoryById(req, res) {
  try {
    let { _id } = req.params;
    let data = await Category.findById({ _id });
    res.status(200).send(data);
  } catch (error) {
    res.send(404).send({ error: error.message });
  }
}

async function createCategory(req, res) {
  try {
    let data = await Category.create(req.body);
    res.status(200).send(data);
  } catch (error) {
    res.send(404).send({ error: error.message });
  }
}

async function updateCategory(req, res) {
  try {
    let { _id } = req.params;
    let data = await Category.findByIdAndUpdate(_id, req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
}

async function deleteCategory(req, res) {
  try {
    let { _id } = req.params;
    let data = await Category.findByIdAndRemove({ _id });
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
}

export {
  getCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
