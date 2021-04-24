import React from 'react';

function Card() {
	return (
		<div className="h-96 shadow-lg w-72 rounded-md ">
			<div className="p-5">
				<h1 className="text-xl pb-3">Moti Kutiyas</h1>
				<div>
					<div className="flex items-center my-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
							className=" h-4"
						>
							<path
								fill-rule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clip-rule="evenodd"
							/>
						</svg>
						<span className="ml-2 text-xs font-bold">Contact Person</span>
					</div>
					<div className="text-xs ">Baba Ramdev</div>
				</div>
				<div>
					<div className="flex items-center my-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
							className=" h-4"
						>
							<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
						</svg>
						<span className="ml-2 text-xs font-bold ">Phone</span>
					</div>
					<div className="flex items-center">
						<select className="p-2 pr-6 text-xs rounded-md">
							<option>+9111457399</option>
							<option>+9117537609</option>
						</select>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 ml-3 cursor-pointer"
							viewBox="0 0 20 20"
							fill="#1400FF"
						>
							<path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
							<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
						</svg>
					</div>
				</div>
				<div>
					<div className="flex items-center my-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								clip-rule="evenodd"
							/>
						</svg>
						<span className="ml-2 text-xs font-bold">Address</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 cursor-pointer ml-1"
							viewBox="0 0 20 20"
							fill="#1400FF"
							strokeWidth="1px"
							className="pl-2 h-6 w-6"
						>
							<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
							<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
						</svg>
					</div>
					<div className="text-xs">Aurangzeb Pur, Uttarakhand 247662</div>
				</div>
				<div className="flex justify-end items-center mt-5 cursor-pointer">
					<span className="ml-2 mr-2 text-xs font-bold ">More Details</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div className="mt-5">
					<span className="py-2 px-7 bg-red-200 text-sm rounded-full">
						Oxygen
					</span>
				</div>
			</div>
			<hr />
			<div className="flex justify-around mt-2">
				<div className="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4 cursor-pointer"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
					</svg>
					<div className="ml-1 text-sm">+1</div>
				</div>
				<div className="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4 cursor-pointer"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
					</svg>
					<div className="ml-1 text-sm">+1</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
