import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'pi pi-home',
        // children: [
        //   {
        //     state: 'button',
        //     name: 'Button'
        //   },
        //   {
        //     state: 'typography',
        //     name: 'Typography'
        //   }
        // ]
      }
    ],
  },
  {
    label: 'User Control',
    main: [
      {
        state: 'reviewer',
        name: 'Reviewer',
        type: 'link',
        icon: 'pi pi-users'
      }
    ],
  },
  {
    label: 'Operations',
    main: [
      {
        state: 'campaigns',
        name: 'Campaigns',
        type: 'link',
        icon: 'pi pi-globe'
      }
    ]
  },
  {
    label: 'Data Control',
    main: [
      {
        state: 'university',
        name: 'University',
        type: 'link',
        icon: 'pi pi-briefcase'
      }
    ]
  }
    
  
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
