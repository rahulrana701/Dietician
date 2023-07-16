const dietarray = [
    {
        "gender": "male",
        "goaltype": "weightloss",
        "diettype": "vegetarian",
        "meal_plan": {
            "breakfast": "1 cup of oatmeal with almond milk, topped with berries",
            "midmorningsnack": "1 container of Greek yogurt with sliced almonds",
            "lunch": "1 cup of quinoa salad with mixed vegetables and tofu",
            "afternoonsnack": "Carrot sticks with hummus",
            "dinner": "Grilled vegetable stir-fry with 1/2 cup of brown rice",
            "eveningsnack": "1/4 cup of roasted chickpeas",
            "prebedtimesnack": "Herbal tea"
        }
    },
    {
        "gender": "female",
        "goaltype": "weightloss",
        "diettype": "non-vegetarian",
        "meal_plan": {
            "breakfast": "2 egg white omelet with spinach and feta cheese",
            "midmorningsnack": "Mixed berries and cottage cheese",
            "lunch": "Grilled chicken breast with steamed broccoli and 1/2 cup of quinoa",
            "afternoonsnack": "Protein shake with almond milk",
            "dinner": "Baked salmon with roasted asparagus and 1/2 cup of sweet potato",
            "eveningsnack": "Hard-boiled eggs",
            "prebedtimesnack": "Greek yogurt with sliced almonds"
        }
    },
    {
        "gender": "male",
        "goaltype": "weightgain",
        "diettype": "vegetarian",
        "meal_plan": {
            "breakfast": "Scrambled tofu with 2 slices of whole wheat toast and avocado",
            "midmorningsnack": "Banana with peanut butter",
            "lunch": "Chickpea curry with 1/2 cup of brown rice",
            "afternoonsnack": "Mixed nuts and dried fruits",
            "dinner": "Vegetable stir-fry with quinoa",
            "eveningsnack": "Protein smoothie with almond milk",
            "prebedtimesnack": "Cottage cheese with sliced fruits"
        }
    },
    {
        "gender": "female",
        "goaltype": "weightgain",
        "diettype": "non-vegetarian",
        "meal_plan": {
            "breakfast": "Whole wheat pancakes with scrambled eggs",
            "midmorningsnack": "Protein bar",
            "lunch": "Grilled chicken breast with roasted vegetables and 1/2 cup of sweet potato",
            "afternoonsnack": "Greek yogurt with granola",
            "dinner": "Salmon with quinoa and steamed asparagus",
            "eveningsnack": "Trail mix",
            "prebedtimesnack": "Cottage cheese with honey"
        }
    },
    {
        "gender": "male",
        "goaltype": "musclegain",
        "diettype": "vegetarian",
        "meal_plan": {
            "breakfast": "Vegetable omelet with whole grain bread",
            "midmorningsnack": "Protein smoothie with almond milk",
            "lunch": "Black bean and quinoa salad with avocado",
            "afternoonsnack": "Greek yogurt with mixed nuts",
            "dinner": "Tofu and vegetable stir-fry with brown rice",
            "eveningsnack": "Roasted edamame",
            "prebedtimesnack": "Casein protein shake"
        }
    },
    {
        "gender": "female",
        "goaltype": "musclegain",
        "diettype": "non-vegetarian",
        "meal_plan": {
            "breakfast": "Smoked salmon with whole wheat bagel",
            "midmorningsnack": "Cottage cheese with sliced fruits",
            "lunch": "Grilled chicken breast with quinoa and roasted vegetables",
            "afternoonsnack": "Protein bar",
            "dinner": "Lean steak with sweet potato and steamed broccoli",
            "eveningsnack": "Greek yogurt with almonds",
            "prebedtimesnack": "Chocolate protein shake"
        }
    },
    {
        "gender": "male",
        "goaltype": "weightloss",
        "diettype": "non-vegetarian",
        "meal_plan": {
            "breakfast": "Vegetable omelet with egg whites, spinach, and tomatoes",
            "midmorningsnack": "Greek yogurt with mixed berries",
            "lunch": "Grilled chicken breast with steamed broccoli and quinoa",
            "afternoonsnack": "Sliced turkey breast with cucumber slices",
            "dinner": "Baked cod with roasted asparagus and brown rice",
            "eveningsnack": "Celery sticks with almond butter",
            "prebedtimesnack": "Low-fat cottage cheese with sliced fruits"
        }
    },

    {
        "gender": "female",
        "goaltype": "weightloss",
        "diettype": "vegetarian",
        "meal_plan": {
            "breakfast": "Spinach and mushroom tofu scramble",
            "midmorningsnack": "Green smoothie with kale, spinach, and almond milk",
            "lunch": "Quinoa and roasted vegetable salad",
            "afternoonsnack": "Carrot sticks with hummus",
            "dinner": "Grilled tofu with steamed broccoli and brown rice",
            "eveningsnack": "Mixed nuts and seeds",
            "prebedtimesnack": "Herbal tea"
        }
    },
    {
        "gender": "male",
        "goaltype": "weightgain",
        "diettype": "non-vegetarian",
        "meal_plan": {
            "breakfast": "3 whole eggs with spinach and cheese",
            "midmorningsnack": "Protein shake with whole milk",
            "lunch": "Grilled chicken thighs with roasted vegetables and quinoa",
            "afternoonsnack": "Beef jerky",
            "dinner": "Steak with baked potatoes and steamed asparagus",
            "eveningsnack": "Cottage cheese with pineapple chunks",
            "prebedtimesnack": "Peanut butter sandwich on whole wheat bread"
        }
    },
    {
        "gender": "female",
        "goaltype": "weightgain",
        "diettype": "vegetarian",
        "meal_plan": {
            "breakfast": "Avocado toast with whole grain bread and scrambled tofu",
            "midmorningsnack": "Trail mix with mixed nuts and dried fruits",
            "lunch": "Chickpea and vegetable stir-fry with brown rice",
            "afternoonsnack": "Greek yogurt with honey and granola",
            "dinner": "Vegetable curry with lentils and quinoa",
            "eveningsnack": "Peanut butter banana smoothie",
            "prebedtimesnack": "Mixed nuts and seeds"
        }
    },
    {
        "gender": "male",
        "goaltype": "musclegain",
        "diettype": "non-vegetarian",
        "meal_plan": {
            "breakfast": "Scrambled eggs with whole wheat toast and avocado",
            "midmorningsnack": "Protein shake with milk, banana, and whey protein",
            "lunch": "Grilled chicken breast with quinoa and roasted vegetables",
            "afternoonsnack": "Greek yogurt with mixed nuts",
            "dinner": "Lean beef steak with sweet potato mash and steamed broccoli",
            "eveningsnack": "Cottage cheese with pineapple chunks",
            "prebedtimesnack": "Casein protein shake"
        }
    },
    {
        "gender": "female",
        "goaltype": "musclegain",
        "diettype": "vegetarian",
        "meal_plan": {
            "breakfast": "Vegetable tofu scramble with whole grain toast",
            "midmorningsnack": "Protein smoothie with almond milk, mixed berries, and protein powder",
            "lunch": "Chickpea and quinoa salad with mixed vegetables and avocado",
            "afternoonsnack": "Greek yogurt with nuts and seeds",
            "dinner": "Lentil and vegetable stir-fry with brown rice",
            "eveningsnack": "Peanut butter and banana sandwich on whole wheat bread",
            "prebedtimesnack": "Cottage cheese with sliced fruits"
        }
    }

]

module.exports = dietarray;