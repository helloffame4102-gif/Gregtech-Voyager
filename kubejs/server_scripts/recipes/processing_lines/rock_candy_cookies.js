import { recipe_lcr, recipe_mixer } from "../../00_util/recipeUtils"

ServerEvents.recipes((event) => {
    /**
     *
     * @param {*} output
     * @param {*} count
     * @param {*} ingredientsItem
     * @param {*} bakingsheet
     * @param {*} grandma
     * @param {*} eut
     * @param {*} time
     */
    function oven(output, count, ingredientsItem, bakingsheet, grandma, eut, time) {
        event.recipes.gtceu
            .oven("kubejs:" + output + "_" + bakingsheet)
            .itemInputs(ingredientsItem)
            .itemOutputs(count + "x kubejs:" + output)
            .notConsumable("kubejs:" + grandma + "_grandma_helper")
            .notConsumable("kubejs:" + bakingsheet)
            .duration(time * 20)
            .EUt(eut)
    }
    event.recipes.gtceu.fluid_heater("kubejs:hot_water")
        .inputFluids("gtceu:distilled_water 2000")
        .outputFluids("gtceu:hot_water 1600")
        .EUt(480)
        .duration(120)
        .circuit(2)
    event.recipes.gtceu.mixer("kubejs:raw_sugar_syrup")
        .inputFluids("gtceu:hot_water 1600")
        .itemInputs("24x minecraft:sugar")
        .outputFluids("gtceu:raw_sugar_syrup 1200")
        .EUt(120)
        .duration(200)
    event.recipes.gtceu.centrifuge("kubejs:washed_sugar")
        .inputFluids("gtceu:raw_sugar_syrup 6000")
        .itemOutputs("6x gtceu:washed_sugar_dust")
        .outputFluids("gtceu:distilled_water 600", "gtceu:dark_syrup_waste 400")
        .EUt(120)
        .duration(600)
    event.recipes.gtceu.distillation_tower("kubejs:dark_syrup_waste_distilling")
        .inputFluids("gtceu:dark_syrup_waste 1000")
        .outputFluids("gtceu:hot_water 3000", "gtceu:raw_sugar_syrup 450")
        .EUt(1920)
        .duration(300)
    event.recipes.gtceu.large_chemical_reactor("kubejs:purified_sugary_slurry")
        .notConsumableFluid("gtceu:carbon_dioxide 1000")
        .notConsumable("1x gtceu:calcium_hydroxide_dust")
        .itemInputs("6x gtceu:washed_sugar_dust")
        .outputFluids("gtceu:purified_sugary_slurry 2000")
        .duration(400)
        .EUt(1920)
    event.recipes.gtceu.large_chemical_reactor("kubejs:granulated_purified_sugar")
        .inputFluids("gtceu:purified_sugary_slurry 1000", "minecraft:lava 2")
        .itemOutputs("16x gtceu:granulated_purified_sugar_dust")
        .EUt(480)
        .duration(120)
    event.recipes.gtceu.mixer("kubejs:dirty_rock_candy_syrup")
        .inputFluids("gtceu:hot_water 16000")
        .itemInputs("64x gtceu:granulated_purified_sugar_dust", "64x gtceu:granulated_purified_sugar_dust", "64x minecraft:cobblestone", "64x minecraft:cobblestone")
        .outputFluids("gtceu:dirty_rock_sugar_syrup 15500")
        .EUt(480)
        .duration(600)
    event.recipes.gtceu.distillery("kubejs:rock_candy_syrup")
        .inputFluids("gtceu:dirty_rock_sugar_syrup 15500")
        .outputFluids("gtceu:rock_sugar_syrup 15000")
        .EUt(480)
        .duration(100)
})