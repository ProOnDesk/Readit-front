import { Component } from "react";
import { TiStar } from "react-icons/ti";

export default class CollectionItemLoader extends Component {
  render() {
    return (
      <button className="w-full max-h-[355px] flex flex-col justify-start items-start shadow-xl rounded-lg overflow-hidden group">
        <div className="relative w-full aspect-video overflow-hidden object-contain object-center">
          <div className="object-cover object-center w-full h-full bg-gray-300" />
          <div className="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
        </div>
        <div className="w-full h-[148px] px-3 py-2 flex justify-between items-start flex-col pb-2">
          <div className="flex justify-between w-full items-center text-xs gap-1">
            <span className="text-xl font-semibold line-clamp-2 bg-gray-300 w-7/12 h-5"></span>
            <p className="font-medium flex justify-center items-center gap-1">
              --
              <span className="text-gray-300 text-xl">
                <TiStar />
              </span>
            </p>
          </div>
          <div className="h-[56px] w-full">
            <span className="block bg-gray-300 w-10/12 h-full"></span>
          </div>
          <div className="w-full mt-2">
            <p className="text-right font-bold">-- PLN</p>
          </div>
        </div>
      </button>
    );
  }
}
