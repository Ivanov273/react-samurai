import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe('Profile Component', () => {

    test('status from props should be in the state', () => {
      const  component = create(<ProfileStatus profilestatus="IT KAMASUTRA" />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("IT KAMASUTRA");
    })
    test('span', () => {
      const  component = create(<ProfileStatus  />)
        const root = component.root
        const span = root.findByType('span')
        expect(span).toBe(span);
    })
    test('span length', () => {
      const  component = create(<ProfileStatus  />)
        const root = component.root
        const span = root.findByType('span')
        expect(span.length).not.toBeNull();
    })
    test('span inner', () => {
      const  component = create(<ProfileStatus profilestatus="IT KAMASUTRA" />)
        const root = component.root
        const span = root.findByType('span')
        expect(span.children[0]).toBe("IT KAMASUTRA");
    })
    test('input to be null', () => {
      const  component = create(<ProfileStatus profilestatus="IT KAMASUTRA" />)
        const root = component.root
        expect(()=>{
            const input = root.findByType('input')
        }).toThrow();
    })
    test('input should be disabled in editMode insted of span', () => {
      const  component = create(<ProfileStatus profilestatus="IT KAMASUTRA" />)
        const root = component.root
        const span = root.findByType('span')
        span.props.onClick()
        const input = root.findByType('input')
        expect(input.props.value).toBe("IT KAMASUTRA");
    })
   // test('callback should be called', () => {
    //    const mockCallback = jest.fn()
    //  const  component = create(<ProfileStatus profilestatus="IT KAMASUTRA" updateStatus={mockCallback} />)
    //    const instance = component.getInstance()
    //    instance.deactivateStatusMode()
     //   expect(mockCallback.mock.calls.length).toBe(1);
   // })
});