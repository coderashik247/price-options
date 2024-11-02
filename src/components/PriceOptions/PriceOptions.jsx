import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 free personal training session per month",
                "Access during standard hours only",
                "Free Wi-Fi",
                "Weekly fitness assessment"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker room and sauna access",
                "4 free personal training sessions per month",
                "Access to group classes",
                "Extended hours access",
                "Towel service",
                "Free Wi-Fi",
                "Weekly fitness assessment and tracking",
                "Discount on merchandise (5%)"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
                "Access to gym equipment",
                "Locker room, sauna, and pool access",
                "Unlimited personal training sessions",
                "Access to group classes and premium classes",
                "Free guest pass (1 per month)",
                "24/7 gym access",
                "Towel and laundry service",
                "Access to steam room",
                "Nutrition and meal planning consultations",
                "Discount on merchandise (10%)",
                "Priority booking for classes"
            ]
        },
        {
            "id": 4,
            "name": "VIP Membership",
            "price": 99.99,
            "features": [
                "24/7 gym access",
                "Locker room, sauna, pool, and spa access",
                "Unlimited personal training sessions",
                "Access to all group and premium classes",
                "Free guest pass (2 per month)",
                "Private locker",
                "Nutrition consultation and customized meal plans",
                "Complimentary massage (1 per month)",
                "Personalized workout plan",
                "Towel, laundry, and dry cleaning service",
                "Priority booking for classes and events",
                "Discount on merchandise (15%)",
                "Exclusive events and workshops",
                "Monthly body composition analysis"
            ]
        }
    ]


    return (
        <div>
            <h2 className="text-5xl font-bold text-center">Best Gym in this city</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-6">
            {
                priceOptions.map( priceOption => <PriceOption priceOption={priceOption}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;