export class Facility {
    constructor(id: number, name: string, description?: string, isDefault?: boolean) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.isDefault = isDefault || false;
      this.isActive = isDefault || false;
    }

    id: number;
    name: string;
    description: string;
    isDefault: boolean;
    isActive: boolean;
}
