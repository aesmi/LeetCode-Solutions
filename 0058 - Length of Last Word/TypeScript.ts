function lengthOfLastWord(s: string): number {
    if (s==" ") return 0;
    let str: string[] = s.trim().split(' ');
    if(str.length === 0) return 0;
    return str[str.length - 1].length;
};
