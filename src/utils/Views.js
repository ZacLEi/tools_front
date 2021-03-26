const unset = {all: 'unset'};
const hidden = {display: 'none'};

export function Show({when, children}) {
    if (when) {
        return <span style={unset}>{children}</span>;
    }
    return <span style={hidden}>{children}</span>;
}