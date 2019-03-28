export const getFirstAbility = (pokemon) => {
    const firstAbility = pokemon.abilities[0];
    
    if (firstAbility)
        return firstAbility.ability.name;

    return null;
};

export const convertPoundsToKilograms = (pounds) => {
    return Math.round(pounds * 0.45359237);

};