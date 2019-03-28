export const getFirstAbility = (pokemon) => {
    const firstAbility = pokemon.abilities[0];
    
    if (firstAbility)
        return firstAbility.ability.name;

    return null;
};
