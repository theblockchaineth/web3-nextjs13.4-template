"use client";

import { useEffect } from 'react';
import { useContractWrite } from 'wagmi'
import { setCurrentTxn } from '../../_components/redux/features/TransactionSlice'
import { useAppDispatch, useAppSelector } from '../../_components/redux/Hooks'
import { parseEther } from 'viem'

export default function PresaleMintButton(props) {

  // required props: contract, proof, decisions, quantity, price

    const txn = useAppSelector((state) => state.txnReducer.value);
    const dispatch = useAppDispatch();

    console.log(props)

    // console log every time props change
    useEffect(() => {
        console.log(props)
    }, [props])

    const { data, isLoading, isSuccess, write, isError, status } = useContractWrite({
        address: props.contract,
        abi: [{
          "inputs": [
              {
                  "internalType": "bytes32[]",
                  "name": "_merkleProof",
                  "type": "bytes32[]"
              },
              {
                  "internalType": "uint256[]",
                  "name": "decisions",
                  "type": "uint256[]"
              },
              {
                  "internalType": "uint256",
                  "name": "quantity",
                  "type": "uint256"
              }
          ],
          "name": "allowlistMint",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
      }],
        functionName: 'allowlistMint',
        args: [
          props.proof.proofs,
          props.decisions,
          props.quantity

        ],
        value: parseEther(props.price),
        onSuccess(data) {
          console.log('Success', data)
          dispatch(setCurrentTxn("Submitted minting transaction to the blockchain. Please await for confirmation from your wallet provider."))
        },
        onError(data) {
          console.log('Success', data)
          dispatch(setCurrentTxn("An error occured whilst minting. Please check your wallet and try again if required."))
        },
      })

    return (
        <button
        className="btn btn-lg btn-secondary font-marker tracking-wider mt-8"
        disabled={!write} onClick={() => write?.()}
      >
        Submit Transaction
      </button>
    )

    // use like this: <PresaleMintButton contract={contract} proof={proof} decisions={decisions} quantity={quantity} price={price} />
}


 