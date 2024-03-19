import Price from "../Price/Price";

const PriceOption = () => {

 const priceOption =   [
        {
          "id": 1,
          "name": "Basic",
          "price": 29.99,
          "features": [
            "Access to cardio equipment",
            "Access to weight training equipment",
            "Access to locker rooms",
            "Access to showers"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 49.99,
          "features": [
            "Access to all Basic features",
            "Access to group fitness classes",
            "Personalized workout plan",
            "Access to swimming pool",
            "Access to sauna"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 79.99,
          "features": [
            "Access to all Standard features",
            "Access to sauna and steam room",
            "Towel service",
            "Free personal training session per month",
            "Nutritional consultation"
          ]
        }
      ]

      
    return (
        <div className="md:p-16">
           <div className="text-center my-6 font-bold">
           <h2 className="text-5xl">Best Prices in the Town</h2>
           </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {
                priceOption.map(item => <Price key={item.id} option={item}></Price>)
            }
          </div>
        </div>
    );
};

export default PriceOption;