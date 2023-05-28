// components
import Plan from "./helpers/plan";
// motion

const Pricing = () => {
  return (
    <div id="pricing">
      <div className="mx-auto py-5">
        <h1 className="text-center text-white text-6xl font-bold">
          Choose Plan
        </h1>
        <div className="flex flex-col flex-wrap md:flex-row mx-auto my-24">
          <Plan delay={0.1} months={12} price={29.99} />
          <Plan delay={0.3} months={6} price={19.99} />
          <Plan delay={0.5} months={3} price={9.99} />
          <Plan delay={0.7} months={1} price={5.99} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
