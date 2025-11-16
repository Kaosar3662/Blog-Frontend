import Button from '../components/primary-btn';
import { useRef, useState } from 'react';

const BlogForm = () => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState('https://mkt.cdnpk.net/web-app/media/freepik-4-2000.webp');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size < 5000000) {
      const reader = new FileReader();
      reader.onload = (w) => {
        setPreview(w.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('File is too large!');
    }
  };

  return (
    <div className="fixed w-full h-full bg-(--Neutral-Black-900)/90 top-0 left-0 grid content-center gap-4 p-4 z-12 ">
      <button className="bg-(--Neutral-White) w-fit mx-auto px-4 py-2 rounded-lg">
        Close
      </button>
      <form
        action=""
        className="flex flex-col bg-(--Neutral-White) p-6 w-full max-w-lg mx-auto rounded-lg gap-5 max-h-[800px] overflow-auto"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            required
            className="px-4 py-2 bg-(--Neutral-White-300) rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subtitle">Sub-Title</label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            placeholder="Sub-Title"
            required
            className="px-4 py-2 bg-(--Neutral-White-300) rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            required
            className="px-4 py-2 bg-(--Neutral-White-300) rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            required
            className="px-4 py-2 bg-(--Neutral-White-300) rounded-lg"
          />
        </div>
        <div className="flex gap-2 items-center">
          <input type="checkbox" id="featured" name="featured" />
          <label htmlFor="featured">This is a featured Blog</label>
        </div>

        <label
          htmlFor="uploadimg"
          className="flex flex-col gap-4 h-fit cursor-pointer"
        >
          <input
            type="file"
            id="uploadimg"
            ref={fileInputRef}
            className="picture px-4 py-2 bg-(--Neutral-White-300) rounded-lg cursor-pointe"
            onChange={handleImageChange}
          />
          <img src={preview} alt="img" className="img rounded-lg" />
        </label>

        <Button btnTitle="Submit" type="submit" />
      </form>
    </div>
  );
};

export default BlogForm;
