const images = document.querySelectorAll(".image-container img")

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const image = entry.target

        image.src = image.src.replace("80&w=10","80&w=2000")

        observer.unobserve(image)
    })
})


images.forEach((image) => {
    observer.observe(image)    
})