export default function Bank() {
  function takeLoan() {}

  return (
    <div className="">
      <div>bank</div>
      <div className="absolute text-left bg-white p-[2rem] mt-[1rem]">
        <p>Available Loan!</p>
        <p>Value: 100000</p>
        <p>Monthly cost: 1000</p>
        <button onClick={takeLoan} className="bg-[#be955c] border-4 p-[0.5rem]">
          Take Loan
        </button>
      </div>
    </div>
  );
}
