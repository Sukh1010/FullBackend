import Product from "../model/productModel.js";
import cloudinary from "cloudinary";

async function getproducts(req, res) {
  try {
    let data = await Product.find().count();
    // let count = await Product.find().countDocuments();

    res.status(200).send({
      status: "success",
      message: "Successfully fetch data!",
      // count,
      data,
      // products,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function getproductById(req, res) {
  try {
    let { _id } = req.params;
    let data = await Product.findById({ _id });
    res.status(200).send({
      status: "success",
      message: "Successfully fetch data!",
      data,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function createproduct(req, res) {
  try {
    const file = req.files.image;
    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      async function (error, { url }) {
        req.body.image = url ? url : "";
        let data = await Product.create(req.body);
        res.status(200).send({
          status: "success",
          message: "Successfully fetch data!",
          data,
        });
      }
    );
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function updateproduct(req, res) {
  try {
    let { id } = req.params;
    let data = await Product.findByIdAndUpdate(id, req.body);
    res.status(200).send({
      status: "success",
      message: "Successfully fetch data!",
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

// delete

async function deleteproduct(req, res) {
  try {
    let { _id } = req.params;
    let data = await Product.findByIdAndRemove(_id, req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

export {
  getproducts,
  getproductById,
  createproduct,
  updateproduct,
  deleteproduct,
};
