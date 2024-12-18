res = async () => {
    const res = await fetch('https://libretranslate.com/translate', {
        method: 'POST',
        body: JSON.stringify({
            q: '',
            source: 'auto',
            target: 'fr',
            format: 'text',
            alternatives: 3,
            api_key: ''
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    return res.data
}
const str = res()

setTimeout(() => {
    console.log(str)
}, 3000)
