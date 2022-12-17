import {Image} from "semantic-ui-react"

export default function ImageSlice(props: { folder: string, index: number }) {
    return (
        <Image src={`${props.folder}/${props.index}.png`} alt={props.folder} />
    );
}
