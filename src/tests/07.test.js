import { describe, expect, it } from "vitest";
import { drawGift } from "../challenges/07";

const test_1 = 
`   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`;
const test_2 = 
`    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`;

const test_3 = 
`#
`;

const test_4 = 
` ##
###
##
`;

const test_5 = 
`         ##########
        #%%%%%%%%##
       #%%%%%%%%#%#
      #%%%%%%%%#%%#
     #%%%%%%%%#%%%#
    #%%%%%%%%#%%%%#
   #%%%%%%%%#%%%%%#
  #%%%%%%%%#%%%%%%#
 #%%%%%%%%#%%%%%%%#
##########%%%%%%%%#
#%%%%%%%%#%%%%%%%#
#%%%%%%%%#%%%%%%#
#%%%%%%%%#%%%%%#
#%%%%%%%%#%%%%#
#%%%%%%%%#%%%#
#%%%%%%%%#%%#
#%%%%%%%%#%#
#%%%%%%%%##
##########
`;

describe("drawGift", () => {
  it("Should return box with size 4 and '+' as the face-fill character", () => {
    expect(drawGift(4, "+")).toBe(test_1);
  });

  it("Should return box with size 5 and '*' as the face-fill character", () => {
    expect(drawGift(5, "*")).toBe(test_2);
  });

  it("Should return box with size 1 and '^' as the face-fill character", () => {
    expect(drawGift(1, "^")).toBe(test_3);
  });

  it("Should return box with size 2 and '&' as the face-fill character", () => {
    expect(drawGift(2, "&")).toBe(test_4);
  });

  it("Should return box with size 10 and '%' as the face-fill character", () => {
    expect(drawGift(10, "%")).toBe(test_5);
  });
});
