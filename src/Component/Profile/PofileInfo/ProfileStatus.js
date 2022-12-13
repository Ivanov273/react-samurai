import React from 'react';

export default class ProfileStatus extends React.Component {

    state = {
        status: this.props.profilestatus,
        editmode: false
    }
    activatedStatusMode = () => {
        this.setState({
            editmode: true
        })
    }
    deactivateStatusMode = () => {
        this.setState({
            editmode: false
        })
        this.props.UpdateProfileThunkStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(PrevProps) {
        if (PrevProps.profilestatus != this.props.profilestatus) {
            this.setState({
                status: this.props.profilestatus
            })
        }
    }

    render() {
        return <div>
            {!this.state.editmode && <div><span
                onClick={this.activatedStatusMode}>{this.state.status || '--------'}</span>
            </div>}
            {this.state.editmode &&
                <div><input autoFocus={true} onBlur={this.deactivateStatusMode}
                            value={this.state.status} onChange={this.onStatusChange} type="text"/></div>}
        </div>
    }

}