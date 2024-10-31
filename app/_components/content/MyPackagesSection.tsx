"use client";

import Link from "next/link";
import React from "react";
import Modal from "../ui/Modal";
import EditPackageModal from "./EditPackageModal";

export default function MyPackagesSection() {
  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="flex flex-col sm400:flex-row w-full justify-between items-start sm400:items-center gap-5 pb-12 pt-4 md:pb-16 mb:pt-8 px-4 sm500:px-8 sm:px-12 lg:px-16 lg:pb-20 lg:pt-12">
        <div className="">
          <h3 className="font-semibold text-2xl sm500:text-3xl sm:text-4xl text-left">
            Zestawy
          </h3>
          <p>Utworzone zestawy: 1</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Modal>
            <Modal.Open opens="package">
              <button className="bg-mainGreen hover:bg-mainGreenSecond transition-colors duration-300 text-white rounded-md px-4 py-2">
                Utwórz Zestaw
              </button>
            </Modal.Open>
            <Modal.Window name="package">
              <EditPackageModal />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
}
