"use client";

import { useState, useEffect } from "react";

export default function EditModel(props) {
    // Props and Call = <EditModal mintItemArray={mintItemArray} setMintItemArray={setMintItemArray} selectedItemIdx={selectedItemIdx} showModal={showModal} setShowModal={setShowModal} fnSetMintItemArrayValue={fnSetMintItemArrayValue} />

    // useffect that watches the showModal prop and when true runs window.my_modal_5.showModal()
    // also, when showModal is false, it runs window.my_modal_5.close() method

    const [itemObject, setItemObject] = useState({})

    useEffect(() => {
        if (props.showModal) {
            setItemObject({
                gender: String(props.mintItemArray[props.selectedItemIdx]).charAt(1) || 0,
                clique: String(props.mintItemArray[props.selectedItemIdx]).charAt(2) || 0,
                physique: String(props.mintItemArray[props.selectedItemIdx]).charAt(3) || 0,
                mentality: String(props.mintItemArray[props.selectedItemIdx]).charAt(4) || 0
            });
            props.setShowModal(true)
            window.my_modal_5.showModal()
            console.log(
                props.mintItemArray,
                props.selectedItemIdx,
                props.showModal,
                props.mintItemArray[props.selectedItemIdx],
                itemObject
            )
        } else {
            props.setShowModal(false)
            window.my_modal_5.close()
        }
    }, [props.showModal])

    // use effect when props.selectedItemIdx changes, parse the mintItemArray[selectedItemIdx] and update the itemObject state
    useEffect(() => {
        setItemObject({
            gender: String(props.mintItemArray[props.selectedItemIdx]).charAt(1),
            clique: String(props.mintItemArray[props.selectedItemIdx]).charAt(2),
            physique: String(props.mintItemArray[props.selectedItemIdx]).charAt(3),
            mentality: String(props.mintItemArray[props.selectedItemIdx]).charAt(4)
        });
    }, [props.selectedItemIdx])

    const handleChange = e => {
        const { name, value } = e.target;
        setItemObject(prevState => ({
            ...prevState,
            [name]: value || 0
        }));
        console.log(itemObject)
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(itemObject)
        const newItemDNA = "1" + String(itemObject.gender || 0) + String(itemObject.clique || 0) + String(itemObject.physique || 0) + String(itemObject.mentality || 0)
        console.log(parseInt(newItemDNA))
        props.fnSetMintItemArrayValue(props.selectedItemIdx, parseInt(newItemDNA))
        props.setShowModal(false)
    }

    return (
        <>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box bg-zinc-800 border rounded-none" onSubmit={(e) => onFormSubmit(e)} >
                    <div className="grid grid-cols-1 justify-items-center">
                        <h3 className="font-marker text-xl mt-6">Influence the art and make it your own</h3>
                        <h3 className="font-marker text-lg mb-6">Token #{props.selectedItemIdx + 1}</h3>
                        {/* gender */}
                        <label className="label w-full text-left">
                            <span className="label-text">Gender:</span>
                        </label>
                        <select name="gender" className="select select-secondary w-full" value={itemObject.gender} onChange={handleChange}>
                            <option value={0}>Random</option>
                            <option value={1}>Male</option>
                            <option value={2}>Female</option>
                        </select>

                        {/* Clique */}
                        <label className="label w-full text-left">
                            <span className="label-text pt-4">Clique:</span>
                        </label>
                        <select name="clique" className="select select-secondary w-full" value={itemObject.clique} onChange={handleChange}>
                            <option value={0}>Random</option>
                            <option value={1}>Goths</option>
                            <option value={2}>Jocks</option>
                            <option value={3}>Preppy</option>
                            <option value={4}>Corporation</option>
                            <option value={5}>Casual</option>
                            <option value={6}>Hiphop</option>
                            <option value={7}>Hippies</option>
                        </select>

                        {/* Physique */}
                        <label className="label w-full text-left">
                            <span className="label-text pt-4">Physique:</span>
                        </label>
                        <select name="physique" className="select select-secondary w-full" value={itemObject.physique} onChange={handleChange}>
                            <option value={0}>Random</option>
                            <option value={1}>Underweight</option>
                            <option value={2}>Medium</option>
                            <option value={3}>Athletic</option>
                            <option value={4}>Overweight</option>
                        </select>

                        {/* Mentality */}
                        <label className="label w-full text-left">
                            <span className="label-text pt-4">Mentality:</span>
                        </label>
                        <select name="mentality" className="select select-secondary w-full" value={itemObject.mentality} onChange={handleChange}>
                            <option value={0}>Random</option>
                            <option value={1}>Brave</option>
                            <option value={2}>Heroic</option>
                            <option value={3}>Aggressive</option>
                            <option value={4}>Neutral</option>
                            <option value={5}>Apathetic</option>
                            <option value={6}>Nervous</option>
                            <option value={7}>Scared</option>
                        </select>

                        <div className="modal-action">
                            <button className="btn">Save Selection</button>
                        </div>
                    </div>
                </form>
            </dialog>
        </>
    )
}