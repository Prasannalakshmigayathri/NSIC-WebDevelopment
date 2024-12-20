from collections import Counter

def min_window_substring(s, t):
    if not t or not s:
        return ""
    
    t_count = Counter(t)
    current_count = {}
    start, end = 0, 0
    required = len(t_count)
    formed = 0
    min_len = float("inf")
    min_window = ""

    while end < len(s):
        char = s[end]
        current_count[char] = current_count.get(char, 0) + 1

        if char in t_count and current_count[char] == t_count[char]:
            formed += 1
        
        while start <= end and formed == required:
            if end - start + 1 < min_len:
                min_len = end - start + 1
                min_window = s[start:end + 1]
            
            start_char = s[start]
            current_count[start_char] -= 1
            if start_char in t_count and current_count[start_char] < t_count[start_char]:
                formed -= 1
            start += 1
        
        end += 1
    
    return min_window

# Example
s = "ADOBECODEBANC"
t = "ABC"
print(min_window_substring(s, t)) 



def top_three_scores(scores):
    scores = list(map(int, scores.split()))
    return sorted(scores, reverse=True)[:3]

# Example
print(top_three_scores("50 90 85 70 80"))  # Output: [90, 85, 80]
print(top_three_scores("10 20 30 40 50"))  # Output: [50, 40, 30]

