const countries = ['Mexico', 'Finland', 'USA', 'Japan', 'Denmark']

const isFinlandThere = countries.some( country =>{
    return country === 'Finland'
})

console.log('Is Finland in the group: ' + isFinlandThere)