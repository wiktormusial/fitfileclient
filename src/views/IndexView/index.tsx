import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux/hooks";
import { dataAdded, setLoading } from "../../store/infos/infosSlice";
import uploadFile from "../../api/uploadFile/uploadFIle";

const IndexView = () => {
  const [file, setFile] = useState<File>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getData = () => {
    if (file) {
      uploadFile(file)
        .then((res) => {
          dispatch(dataAdded(res));
        })
        .catch((err) => console.log(err));
    }
    dispatch(setLoading());
    navigate("/dashboard");
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files![0])} />
      <button onClick={() => getData()}>Upload</button>
    </div>
  );
};

export default IndexView;
