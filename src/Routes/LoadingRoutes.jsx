import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";

const LoadingRoutes = ({ children }) => {
  const { isLoading } = useAuth();
  if (isLoading) {
    return (
      <div>
        <div className="text-center mt-40 mb-80">
          <span className="loading loading-spinner text-dark-03 loading-lg"></span>
        </div>
      </div>
    );
  }
  return children;
};

LoadingRoutes.propTypes = {
  children: PropTypes.node,
};

export default LoadingRoutes;
