import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import defaultImage from "@/core/assets/no-image.jpg";

const BookDonationForm = () => {
  const [imagePreview, setImagePreview] = useState(defaultImage);

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      description: "",
      year: "",
      publisher: "",
      genre: "",
      booksCount: "",
      pageCount: "",
      image: null,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Judul buku diperlukan")
        .max(50, "Judul buku maksimal 50 karakter"),
      author: Yup.string()
        .required("Nama penulis diperlukan")
        .max(50, "Nama penulis maksimal 50 karakter"),
      description: Yup.string(),
      year: Yup.number()
        .required("Tahun terbit diperlukan")
        .positive()
        .integer()
        .min(1000, "Tahun terbit tidak valid")
        .max(
          new Date().getFullYear(),
          `Tahun terbit tidak boleh lebih dari ${new Date().getFullYear()}`
        ),
      publisher: Yup.string()
        .required("Nama penerbit diperlukan")
        .max(50, "Nama penerbit maksimal 50 karakter"),
      genre: Yup.string()
        .required("Genre diperlukan")
        .max(50, "Genre maksimal 50 karakter"),
      booksCount: Yup.number()
        .required("Jumlah buku diperlukan")
        .positive("Jumlah buku harus lebih dari 0")
        .integer("Jumlah buku harus bilangan bulat"),
      pageCount: Yup.number()
        .positive("Jumlah halaman harus lebih dari 0")
        .integer("Jumlah halaman harus bilangan bulat"),
      image: Yup.mixed()
        .required("Gambar diperlukan")
        .test(
          "fileType",
          "Format file tidak didukung. Hanya gambar (jpeg, png, jpg) yang diperbolehkan.",
          (value) => {
            if (value) {
              return ["image/jpeg", "image/png", "image/jpg"].includes(
                value.type
              );
            }
            return false;
          }
        ),
    }),

    onSubmit: (values) => {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (key !== "image") {
          formData.append(key, values[key]);
        } else {
          formData.append(key, values[key].name);
        }
      });

      fetch("/api/donate", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          formik.resetForm();
          setImagePreview(defaultImage);
        });
    },
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("image", file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="bg-white shadow-lg border border-gray-300 outline-none rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Form Untuk Donasi Buku</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Judul Buku
              </label>
              <input
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Masukkan Judul Buku"
                className={`mt-1 block w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 bg-gray-50 ${
                  formik.touched.title && formik.errors.title
                    ? "ring-2 ring-red-500"
                    : "focus:border-default focus:ring focus:ring-default focus:ring-opacity-50"
                }`}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.title}
                </div>
              ) : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Penulis
              </label>
              <input
                type="text"
                name="author"
                value={formik.values.author}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Masukkan Nama Penulis"
                className={`mt-1 block w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 bg-gray-50 ${
                  formik.touched.author && formik.errors.author
                    ? "ring-2 ring-red-500"
                    : "focus:border-default focus:ring focus:ring-default focus:ring-opacity-50"
                }`}
              />
              {formik.touched.author && formik.errors.author ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.author}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Deskripsi
            </label>
            <textarea
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Masukkan Deskripsi Singkat Buku"
              className={`mt-1 block w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 bg-gray-50 ${
                formik.touched.description && formik.errors.description
                  ? "ring-2 ring-red-500"
                  : "focus:border-default focus:ring focus:ring-default focus:ring-opacity-50"
              }`}
              rows="3"
            ></textarea>
            {formik.touched.description && formik.errors.description ? (
              <div className="text-red-500 text-sm">
                {formik.errors.description}
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Penerbit
              </label>
              <input
                type="text"
                name="publisher"
                value={formik.values.publisher}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Masukkan Nama Penerbit"
                className={`mt-1 block w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 bg-gray-50 ${
                  formik.touched.publisher && formik.errors.publisher
                    ? "ring-2 ring-red-500"
                    : "focus:border-default focus:ring focus:ring-default focus:ring-opacity-50"
                }`}
              />
              {formik.touched.publisher && formik.errors.publisher ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.publisher}
                </div>
              ) : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tahun Terbit
              </label>
              <input
                type="number"
                name="year"
                value={formik.values.year}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Masukkan Tahun Terbit"
                className={`mt-1 block w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 bg-gray-50 ${
                  formik.touched.year && formik.errors.year
                    ? "ring-2 ring-red-500"
                    : "focus:border-default focus:ring focus:ring-default focus:ring-opacity-50"
                }`}
              />
              {formik.touched.year && formik.errors.year ? (
                <div className="text-red-500 text-sm">{formik.errors.year}</div>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Genre
              </label>
              <input
                type="text"
                name="genre"
                value={formik.values.genre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Masukkan Genre Buku"
                className={`mt-1 block w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 bg-gray-50 ${
                  formik.touched.genre && formik.errors.genre
                    ? "ring-2 ring-red-500"
                    : "focus:border-default focus:ring focus:ring-default focus:ring-opacity-50"
                }`}
              />
              {formik.touched.genre && formik.errors.genre ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.genre}
                </div>
              ) : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Jumlah Halaman
              </label>
              <input
                type="number"
                name="pageCount"
                value={formik.values.pageCount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Masukkan Jumlah Halaman"
                className={`mt-1 block w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 bg-gray-50 ${
                  formik.touched.pageCount && formik.errors.pageCount
                    ? "ring-2 ring-red-500"
                    : "focus:border-default focus:ring focus:ring-default focus:ring-opacity-50"
                }`}
              />
              {formik.touched.pageCount && formik.errors.pageCount ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.pageCount}
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Jumlah Buku
            </label>
            <input
              type="number"
              name="booksCount"
              value={formik.values.booksCount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Masukkan Jumlah Buku"
              className={`mt-1 block w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 bg-gray-50 ${
                formik.touched.booksCount && formik.errors.booksCount
                  ? "ring-2 ring-red-500"
                  : "focus:border-default focus:ring focus:ring-default focus:ring-opacity-50"
              }`}
            />
            {formik.touched.booksCount && formik.errors.booksCount ? (
              <div className="text-red-500 text-sm">
                {formik.errors.booksCount}
              </div>
            ) : null}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mx-auto">
              <img
                src={imagePreview}
                alt="Buku Yang Mau di Upload"
                className="max-w-[200px] max-h-[300px] mx-auto"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                URL Gambar
              </label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                onBlur={formik.handleBlur}
                className={`mt-1 block w-full border border-gray-300 outline-none rounded-md shadow-sm p-2 bg-gray-50 ${
                  formik.touched.image && formik.errors.image
                    ? "ring-2 ring-red-500"
                    : "focus:border-default focus:ring focus:ring-default focus:ring-opacity-50"
                }`}
              />
              {formik.touched.image && formik.errors.image ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.image}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm bg-default hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-default"
            >
              Submit
            </button>
            <button
              type="reset"
              className="inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm bg-slate-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-slate-500"
              onClick={() => {
                formik.resetForm();
                setImagePreview(defaultImage);
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookDonationForm;
