import Proptypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-300 rounded-lg p-4">
      <h1>
        <span className="text-7xl">{price}</span>
        <span className="text-3xl">/mon</span>
      </h1>
      <h4>{name}</h4>
      {features.map((feature, idx) => (
        <p className="flex items-center gap-1" key={idx}>
          <FaCheckCircle></FaCheckCircle>
          {feature}
        </p>
      ))}
      <button className="btn bg-blue-500 text-white border-none  hover:bg-red-600">
        buy now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: Proptypes.object,
};
export default PriceOption;
