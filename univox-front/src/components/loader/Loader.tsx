import React from "react";
import "./styles.scss";

interface Loaderprops {
  loading: boolean;
  fixed?: boolean;
}

const Loader: React.FC<Loaderprops> = ({ loading, fixed }) => {
  if (!loading) return null;

  const loader = (
    <div className="overlay">
      <div className="overlay__inner">
        <div className="overlay__content">
          <span className="spinner">
          </span>
          <p>
            Loading rooms <span className="dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  )

  if(!fixed) return loader;
  return <div className="overlay-fixed">{loader}</div>;
};
export default Loader;