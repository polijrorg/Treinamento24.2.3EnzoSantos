export type DividerProps = {
    color?: string;
    thickness?: string;
    margin?: string;
    width?: string;
};

const Divider: React.FC<DividerProps> = ({
    color = '#ccc',
    thickness = '1px',
    margin = '16px 0px',
    width = '100%'
}) => (
    <div
        style={{
            width,
            height: thickness,
            backgroundColor: color,
            margin
        }}
    />
);

export default Divider;
