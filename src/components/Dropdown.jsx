import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
function Dropdown() {
  return (
    <div className="flex justify-between">
      <p>Cari Berdasarkan :</p>
      <Menu>
        <div>
          <Menu.Button className="bg-slate-100 rounded-lg px-4 py-2">Kode</Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute flex justify-end bg-red-600">
              <Menu.Item className="relative px-6 py-2 bg-slate-300 rounded-md m-2 cursor-pointer ">
                <div>test</div>
              </Menu.Item>
              <Menu.Item className="px-6 py-2 bg-slate-300 rounded-md m-2 cursor-pointer ">
                <div>test2</div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
    </div>
  );
}

export default Dropdown;
