import {Card,CardImg} from 'reactstrap';

export default function FeatureImage({image,style,handleClick,handleDragStart,handleDragOver,handleDrop,handleHover,handleHoverEnd}) {
    return (
        <Card
            style={{...style,width: '350px', height: '350px'}}
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
};