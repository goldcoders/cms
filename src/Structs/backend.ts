type  Repo =  "github"|"gitlab"|"bitbucket"|"git-gateway";

export interface Backend {
  name: Repo;
  branch?: string;
}
