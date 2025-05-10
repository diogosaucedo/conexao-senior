import React from "react";
import {
  communityMembersMock,
  CommunityMember,
} from "../mocks/communityMembersMock";

export const CommunityMembersSidebar: React.FC = () => {
  const members: CommunityMember[] = communityMembersMock;

  return (
    <aside
      className="w-72 bg-white p-6 shadow-lg rounded-xl sticky top-20 self-start border border-gray-100"
      aria-labelledby="community-members-title"
    >
      <h2
        id="community-members-title"
        className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2"
      >
        <i className="pi pi-users text-indigo-600"></i>
        Membros da Comunidade
      </h2>
      <div className="mb-4 text-sm text-gray-600 flex items-center justify-between border-b pb-3">
        <span>Total de membros: {members.length}</span>
        <span>{members.filter((m) => m.online).length} online</span>
      </div>
      <ul className="space-y-4">
        {members.map((member) => (
          <li key={member.id} className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={member.avatarUrl}
                alt={`Avatar de ${member.name}`}
                className="w-10 h-10 rounded-full object-cover"
              />
              {member.online && (
                <span
                  className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 border-2 border-white ring-1 ring-green-500"
                  title="Online"
                ></span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 hover:text-indigo-600 cursor-pointer font-medium">
                {member.name}
              </span>
              <span className="text-xs text-gray-500">
                {member.online ? "Online agora" : "Offline"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};
