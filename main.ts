while (true) {
    console.log("light_level:" + input.lightLevel())
    if (input.lightLevel() > 11) {
        light.setAll(light.rgb(250, 0, 0))
    } else if (input.lightLevel() > 21) {
        light.setAll(light.rgb(0, 200, 0))
    } else if (input.lightLevel() > 41) {
        light.setAll(light.rgb(0, 0, 200))
    }
    
}
