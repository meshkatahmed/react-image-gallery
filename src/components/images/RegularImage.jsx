import { Card,CardImg } from "reactstrap";

export default function RegularImage({image,style,handleClick,handleDragStart,handleDragOver,handleDrop,handleHover,handleHoverEnd}) {
    return (
        <Card
            style={{...style,width: '160px', height: '160px'}}
            onClick={(e)=>handleClick(e,image)}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            // onDrop={handleDrop}
            onMouseOver={handleHover}
            onMouseOut={handleHoverEnd}
        >
            <CardImg src={image.src} alt='b' />
        </Card>
    );
}