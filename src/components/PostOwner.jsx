export const PostOwner = ({
  name,
  userImage,
  id
}) => {
  return (
  <div className="d-flex align-items-center gap-3">
    <img
      src={userImage}
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />
    <span className="fw-semibold fs-5">{name} {id}</span>
    </div>
    )
};
