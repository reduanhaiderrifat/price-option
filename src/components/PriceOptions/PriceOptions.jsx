import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOption = [
    {
      id: 1,
      name: "Basic Membership",
      description: "Access to basic gym facilities",
      price: 29.99,
      duration: "per month",
      features: [
        "Access to cardio machines",
        "Limited access to weights area",
        "Locker room access",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      description: "Access to standard gym facilities and limited classes",
      price: 49.99,
      duration: "per month",
      features: [
        "Access to all gym facilities",
        "Limited access to group fitness classes",
        "Locker room access",
        "Personal trainer sessions (additional fee)",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      description: "Access to all gym facilities and unlimited classes",
      price: 79.99,
      duration: "per month",
      features: [
        "Access to all gym facilities",
        "Unlimited access to group fitness classes",
        "Locker room access",
        "Personal trainer sessions included",
      ],
    },
    {
      id: 4,
      name: "Annual Membership",
      description: "Access to gym facilities for one year",
      price: 799.99,
      duration: "per year",
      features: [
        "Access to all gym facilities",
        "Unlimited access to group fitness classes",
        "Locker room access",
        "Personal trainer sessions included",
        "Discounts on additional services",
      ],
    },
  ];

  return (
    <div>
      <h2>Best price in the town</h2>
      <div className="grid grid-cols-2 gap-3">
        {priceOption.map((option, idx) => (
          <PriceOption key={idx} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
