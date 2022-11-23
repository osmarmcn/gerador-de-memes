async function main(){
    const memeImageList = await mapImage()
    await createGallery(memeImageList)
    await changeMemePicture(memeImageList[1].path)

}

main()


async function mapImage(){

     const memeObject = [
        {
            "name":"chapolin",
            path: "assents/image/chapolin.jpg"
        },
        {
            "name": "chloe",
            path: "assents/image/chloe.jpg"
        },
        {
            "name":"funny-cat2",
            path:"assents/image/funny-cat2.png"
        }
    ]

    return memeObject
    

}

async function createGallery(imageList){

     const memeSelector = document.querySelector('#meme-list')

    imageList.forEach(picture =>{

        let newOption = document.createElement('option')
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    })

}

async function changeMemePicture(photo){
    let displayImage = document.querySelector('#display-image')
    displayImage.style.backgroundImage = `url(${photo})`

}

