export const formatImgUrl = (imgPath) => {
    imgPath = imgPath.slice(6);
                            
    let formattedImageFileName = (imgPath) => {
        let removedPrefix = imgPath.split('');
        removedPrefix[removedPrefix.length - 4] = '.';
        removedPrefix = removedPrefix.join('');
        return removedPrefix;
    };

    return formattedImageFileName(imgPath)
}