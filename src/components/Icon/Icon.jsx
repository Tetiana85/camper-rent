export const Icon = ({ styles, width, height, iconId }) => {
  return (
    <>
      <svg style={styles} width={width} height={height}>
        <use href={`/sprite.svg#${iconId}`}></use>
      </svg>
    </>
  );
};
