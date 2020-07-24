/**
 * Author: Agbafor Olisa Emmanuel;
 * Title: Lycanthropes' log - Week 3 Assessment
 * Description: An event log to record when Jaques will transform to a werewolf
 */

class LycanthropeTransformationLog {

    transformationDays() {
        console.log("Total Number of days = " + this.event_list.length);
        for (let i = 0; i < this.event_list.length; i++) {
            let day = i + 1;
            this.event_list[i].forEach(function (event) {
                if (event === 'ate pizza') {
                    console.log("On Day (" + day + ") Jaques will transform to a werewolf because he " + event );
                }
            })
        }
    }

    event_list = [
        ["climbed tree", "ate bread", "went to party", "went near fire"],
        ["drank tea", "ate pizza", "slept", "read books"],
        ["ate bread","ate rice", "ate groundnut", "went to under the sun"],
        ["went to gym", "ate pizza", "sang a song", "wrote some codes"],
        ["watched a movie", "washed clothes", "went to river"],
        ["hanged out with friends", "climbed tree", "ate bread"],
        ["went to gym", "ate pizza", "sang a song", "wrote some codes"],
        ["went to swim", "ate pizza", "watched a movie", "washed clothes"],
        ["ate rice", "ate groundnut", "watched a movie", "went to under the sun"],
        ["climbed tree", "ate bread", "went to party", "went near fire"],
        ["drank tea", "ate pizza", "slept", "read books"],
        ["ate bread","ate rice", "ate groundnut", "went to under the sun"],
        ["went to gym", "ate pizza", "sang a song", "wrote some codes"],
        ["watched a movie", "washed clothes", "went to river"],
    ];
}

var werewolf = new LycanthropeTransformationLog();
werewolf.transformationDays();