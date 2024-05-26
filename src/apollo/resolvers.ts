import { Resolver, Query } from "type-graphql";
import { Me } from "./type-defs";
import { RESUME_DATA_EN } from "../data/resume-data/resume-data-en";

@Resolver(() => Me)
export class MeResolver {
  @Query(() => Me)
  me(): Me {
    return RESUME_DATA_EN as any;
  }
}
