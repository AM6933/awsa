while True:
    print ("light_level:" + input.light_level())
    if input.light_level() > 11:
        light.set_all(light.rgb (250,0,0))
    elif input.light_level() > 21:
        light.set_all(light.rgb (0,200,0))
    elif input.light_level() > 41:
        light.set_all(light.rgb (0,0,200))