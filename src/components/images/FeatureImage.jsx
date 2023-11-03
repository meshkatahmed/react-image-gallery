import {Card,CardImg} from 'reactstrap';

export default function FeatureImage({image,style,handleClick,handleHover,handleHoverEnd}) {
    return (
        <Card
            style={{...style,width: '350px', height: '350px'}}
            onClick={(e)=>handleClick(e,image)}
            onMouseOver={handleHover}
            onMouseOut={handleHoverEnd}
        >
            <CardImg src={image.src} alt='b' />
        </Card>
    );
};