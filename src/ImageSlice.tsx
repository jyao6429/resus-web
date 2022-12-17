export default function ImageSlice(props: { folder: string, index: number }) {
    return (
        <img src={`${props.folder}/${props.index}.png`} alt={props.folder} />
    );
}
